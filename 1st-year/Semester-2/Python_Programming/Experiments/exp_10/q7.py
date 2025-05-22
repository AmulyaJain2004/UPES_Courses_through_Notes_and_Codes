import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Line chart
plt.figure(figsize=(8, 6))
plt.plot(x, y, label='sin(x)', color='blue', linestyle='-', linewidth=2)
plt.title('Line Plot')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
plt.show()

# Scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(x, y, label='data', color='red', marker='o')  # Changed markerstyle to marker
plt.title('Scatter Plot')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
plt.show()

# Bar plot
x_categories = ['A', 'B', 'C', 'D']
y_values = [10, 20, 15, 25]
plt.figure(figsize=(8, 6))
plt.bar(x_categories, y_values, color='green')
plt.title('Bar Plot')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.grid(axis='y')
plt.show()

# Histogram
data = np.random.randn(1000)
plt.figure(figsize=(8, 6))
plt.hist(data, bins=30, color='purple', edgecolor='black')
plt.title('Histogram')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()

# Pie chart
sizes = [15, 30, 45, 10]
labels = ['A', 'B', 'C', 'D']
colors = ['orange', 'pink', 'lightblue', 'yellow']  # Specified colors parameter
plt.figure(figsize=(8, 6))
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140, colors=colors)
plt.title('Pie Chart')
plt.show()
