import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler, MinMaxScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

class Datalord:
    def __init__(self, df):
        self.df = df.copy()
        self.numeric_features = df.select_dtypes(include=[np.number]).columns.tolist()
        self.categorical_features = df.select_dtypes(exclude=[np.number]).columns.tolist()
        
    def basic_info(self):
        """Prints basic information about the dataset."""
        print("Dataset Shape:", self.df.shape)
        print("\nMissing Values:\n", self.df.isnull().sum())
        print("\nData Types:\n", self.df.dtypes)
        print("\nFirst 5 Rows:\n", self.df.head())
        
    def eda(self):
        """Performs basic exploratory data analysis."""
        print("\nSummary Statistics:\n", self.df.describe())
        
        plt.figure(figsize=(10, 5))
        sns.heatmap(self.df.isnull(), cbar=False, cmap='viridis')
        plt.title("Missing Values Heatmap")
        plt.show()
        
        for col in self.numeric_features:
            sns.histplot(self.df[col], kde=True, bins=30)
            plt.title(f"Distribution of {col}")
            plt.show()
        
        for col in self.categorical_features:
            sns.countplot(x=self.df[col])
            plt.title(f"Count of {col}")
            plt.xticks(rotation=45)
            plt.show()
    
    def preprocess_pipeline(self, strategy='mean', scaling='standard'):
        """Creates a preprocessing pipeline for numeric and categorical features."""
        num_imputer = SimpleImputer(strategy=strategy)
        cat_imputer = SimpleImputer(strategy='most_frequent')
        
        if scaling == 'standard':
            scaler = StandardScaler()
        elif scaling == 'minmax':
            scaler = MinMaxScaler()
        else:
            raise ValueError("Invalid scaling method. Choose 'standard' or 'minmax'.")
        
        encoder = OneHotEncoder(handle_unknown='ignore')
        
        numeric_transformer = Pipeline(steps=[
            ('imputer', num_imputer),
            ('scaler', scaler)
        ])
        
        categorical_transformer = Pipeline(steps=[
            ('imputer', cat_imputer),
            ('encoder', encoder)
        ])
        
        preprocessor = ColumnTransformer(transformers=[
            ('num', numeric_transformer, self.numeric_features),
            ('cat', categorical_transformer, self.categorical_features)
        ])
        
        return preprocessor
    
    def feature_engineering(self):
        """Applies some feature engineering techniques."""
        # Example: Create new features (you can customize this part)
        if 'Age' in self.df.columns:
            self.df['Age_Group'] = pd.cut(self.df['Age'], bins=[0, 18, 35, 60, np.inf], labels=['Child', 'Young Adult', 'Adult', 'Senior'])
        if 'Fare' in self.df.columns:
            self.df['Log_Fare'] = np.log1p(self.df['Fare'])
        
        return self.df
    
    def transform(self):
        """Returns the transformed DataFrame."""
        return self.df
    
# Example Usage:
# df = pd.read_csv("your_dataset.csv")
# wrangler = DataWrangler(df)
# wrangler.basic_info()
# wrangler.eda()
# preprocessor = wrangler.preprocess_pipeline()
# df_transformed = wrangler.feature_engineering()
