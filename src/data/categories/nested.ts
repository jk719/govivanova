export const CATEGORIES = {
  PAIN_FEVER: {
    name: "Pain & Fever",
    slug: "pain-fever",
    subcategories: {
      ORAL_PAIN_RELIEF: {
        name: "Oral Pain Relief",
        slug: "oral-pain-relief"
      },
      MIGRAINE_RELIEF: {
        name: "Migraine Relief",
        slug: "migraine-relief"
      }
    }
  },
  COLD_FLU: {
    name: "Cold & Flu",
    slug: "cold-flu",
    subcategories: {
      MULTI_SYMPTOM: {
        name: "Multi-Symptom Relief",
        slug: "multi-symptom"
      },
      DAYTIME: {
        name: "Daytime Relief",
        slug: "daytime"
      },
      NIGHTTIME: {
        name: "Nighttime Relief",
        slug: "nighttime"
      }
    }
  },
  ALLERGY: {
    name: "Allergy Care",
    slug: "allergy-care",
    subcategories: {
      ANTIHISTAMINES: {
        name: "Antihistamines",
        slug: "antihistamines"
      },
      NASAL_SPRAYS: {
        name: "Nasal Sprays",
        slug: "nasal-sprays"
      }
    }
  },
  DIGESTIVE: {
    name: "Digestive Health",
    slug: "digestive-health",
    subcategories: {
      ANTACIDS: {
        name: "Antacids",
        slug: "antacids"
      },
      ANTI_DIARRHEAL: {
        name: "Anti-Diarrheal",
        slug: "anti-diarrheal"
      }
    }
  },
  CHILDRENS: {
    name: "Children's Medicine & Wellness",
    slug: "childrens-medicine-wellness",
    subcategories: {
      PAIN_FEVER: {
        name: "Pain & Fever Relievers",
        slug: "pain-fever-relievers"
      },
      COUGH_COLD: {
        name: "Cough & Cold Remedies",
        slug: "cough-cold-remedies"
      }
    }
  }
} as const

export type CategoryKey = keyof typeof CATEGORIES
export type SubcategoryKey<T extends CategoryKey> = keyof typeof CATEGORIES[T]['subcategories']

// Helper functions with renamed exports
export const getNestedCategoryBySlug = (slug: string) => {
  return Object.values(CATEGORIES).find(category => category.slug === slug)
}

export const getNestedSubcategoryBySlug = (categorySlug: string, subcategorySlug: string) => {
  const category = getNestedCategoryBySlug(categorySlug)
  if (!category) return null
  return Object.values(category.subcategories).find(sub => sub.slug === subcategorySlug)
} 