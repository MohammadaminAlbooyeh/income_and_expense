
from django.db import models

class Account(models.Model):
    ACCOUNT_TYPES = [
        ("wallet", "Wallet"),
        ("bank", "Bank Account"),
        ("credit", "Credit Card"),
    ]
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=ACCOUNT_TYPES)
    balance = models.DecimalField(max_digits=14, decimal_places=2, default=0)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name

class Transaction(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    date = models.DateField()
    description = models.CharField(max_length=255, blank=True)
    is_income = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.amount} - {self.account.name}"

class Budget(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.category.name} - {self.amount}"
