export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export type Category = {
  name: string
  slug: string
  tagline: string
  items: {
    name: string
    slug: string
  }[]
}

export type CategoryWithoutItems = Omit<Category, 'items'>

export const getFlatCategoryBySlug = (categories: Category[], slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
}

export const getFlatItemBySlug = (categories: Category[], categorySlug: string, itemSlug: string) => {
  const category = getFlatCategoryBySlug(categories, categorySlug);
  return category?.items.find(item => item.slug === itemSlug);
}

export const getAllCategories = (categories: Category[]): CategoryWithoutItems[] => {
  return categories.map(({ name, slug, tagline }) => ({
    name,
    slug,
    tagline
  }));
};

export const getAllItems = (categories: Category[], categorySlug: string) => {
  const category = getFlatCategoryBySlug(categories, categorySlug);
  return category?.items || [];
};

export const isCategoryValid = (categories: Category[], categorySlug: string): boolean => {
  return !!getFlatCategoryBySlug(categories, categorySlug);
};

export const isItemValid = (categories: Category[], categorySlug: string, itemSlug: string): boolean => {
  return !!getFlatItemBySlug(categories, categorySlug, itemSlug);
};

export const getCategoryPath = (categorySlug: string, itemSlug?: string): string => {
  const parts = [categorySlug];
  if (itemSlug) parts.push(itemSlug);
  return parts.join('/');
}; 