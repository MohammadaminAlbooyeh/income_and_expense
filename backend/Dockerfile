# Dockerfile for Django Backend
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --default-timeout=300 --no-cache-dir -r requirements.txt || pip install --default-timeout=300 --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
