export const CLOUDINARY_CONFIG = {
  cloud_name: 'dv3cd1aoy',
  base_url: 'https://res.cloudinary.com/dv3cd1aoy/image/upload',
  folder: 'viva-pharmacy/products',
  transformations: {
    product: 'c_fill,w_500,h_500,q_auto,f_auto',
    thumbnail: 'c_fill,w_200,h_200,q_auto,f_auto',
    placeholder: 'c_fill,w_100,h_100,q_auto,f_auto,e_blur:1000'
  }
}

export const getProductImageUrl = (filename: string, transformation = 'product') => {
  const transformString = CLOUDINARY_CONFIG.transformations[transformation as keyof typeof CLOUDINARY_CONFIG.transformations]
  return `${CLOUDINARY_CONFIG.base_url}/${transformString}/${CLOUDINARY_CONFIG.folder}/${filename}`
} 