export const generateIngredients = (cocktail: Cocktail) =>
  Object.entries(cocktail).reduce((acc, [key, value]) => {
    if (key.startsWith("strMeasure")) {
      const index = key.replace("strMeasure", "");
      const ingredient = cocktail[`strIngredient${index}` as keyof Cocktail];
      if (value === null && ingredient === null) {
        return acc;
      }
      acc.push({
        measure: (value as string) || "",
        ingredient: (ingredient as string) || "",
      });
    }
    return acc;
  }, [] as { measure: string; ingredient: string }[]);
