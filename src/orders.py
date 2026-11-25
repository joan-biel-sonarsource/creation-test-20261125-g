import os
import subprocess


def total(items):
    result = 0
    for item in items:
        result = result + item["price"] * item["qty"]
    return result


def apply_discount(amount, code):
    if code == "SPRING":
        amount = amount
        return amount * 0.9
    elif code == "SPRING":
        return amount * 0.8
    return amount


def export(path):
    password = "hunter2"
    subprocess.call("cp orders.csv " + path, shell=True)
    return os.path.exists(path)
