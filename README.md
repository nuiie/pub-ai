overall
- remove boxes and border.
- fix mobile nav. trnsparent bg, border, 

homepage

products
- mobile filter section. give search bar page width.

product detial
- add product variance

about

capa

contact
- change send message to gMaps

view quotes
- remove submit quotes
- export quotes as jpg
- send quotes to line
- mobile is overflowing.


```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") // Supabase PostgreSQL URL
}

model Category {
  id       Int            @id @default(autoincrement())
  name     String
  slug     String         @unique
  order    Int
  subcategories Subcategory[]
}

model Subcategory {
  id          Int       @id @default(autoincrement())
  name        String
  slug        String    @unique
  description String?
  category    Category  @relation(fields: [categoryId], references: [id])
  categoryId  Int
  products    Product[]
}

model Product {
  id                Int              @id @default(autoincrement())
  name              String
  sku               String           @unique
  stockingType      String
  description       String
  generalSpec       String
  pdfUrl            String?
  startingPrice     Float
  thumbnailImageUrl String?
  subcategory       Subcategory      @relation(fields: [subcategoryId], references: [id])
  subcategoryId     Int

  images            ProductImage[]
  variants          ProductVariant[]
  relatedProducts   ProductRelated[] @relation("RelatedFrom")
  relatedToProducts ProductRelated[] @relation("RelatedTo")
  tags              ProductTag[]
}

model ProductImage {
  id        Int     @id @default(autoincrement())
  imageUrl  String
  altText   String?
  sortOrder Int
  product   Product @relation(fields: [productId], references: [id])
  productId Int
}

model ProductVariant {
  id             Int              @id @default(autoincrement())
  sku            String           @unique
  price          Float
  stockQuantity  Int
  product        Product          @relation(fields: [productId], references: [id])
  productId      Int
  variantOptions VariantOption[]
}

model VariantOption {
  id         Int             @id @default(autoincrement())
  name       String          // e.g. "Color"
  value      String          // e.g. "Red"
  variant    ProductVariant  @relation(fields: [variantId], references: [id])
  variantId  Int
}

model ProductRelated {
  id               Int     @id @default(autoincrement())
  product          Product @relation("RelatedFrom", fields: [productId], references: [id])
  productId        Int
  relatedProduct   Product @relation("RelatedTo", fields: [relatedProductId], references: [id])
  relatedProductId Int
}

model Tag {
  id    Int           @id @default(autoincrement())
  name  String
  slug  String        @unique
  products ProductTag[]
}

model ProductTag {
  id        Int     @id @default(autoincrement())
  product   Product @relation(fields: [productId], references: [id])
  productId Int
  tag       Tag     @relation(fields: [tagId], references: [id])
  tagId     Int
}
```


```mermaid
erDiagram

  categories {
    int id PK
    string name
    string slug
    int order
  }

  subcategories {
    int id PK
    string name
    string slug
    int category_id FK
    string description
  }

  products {
    int id PK
    string name
    string sku
    int subcategory_id FK
    string stocking_type
    string description
    string general_spec
    string pdf_url
    float starting_price
    string thumbnail_image_url
  }

  product_images {
    int id PK
    int product_id FK
    string image_url
    string alt_text
    int sort_order
  }

  product_variants {
    int id PK
    int product_id FK
    string sku
    float price
    int stock_quantity
  }

  variant_options {
    int id PK
    int variant_id FK
    string name
    string value
  }

  product_related {
    int id PK
    int product_id FK
    int related_product_id FK
  }

  tags {
    int id PK
    string name
    string slug
  }

  product_tags {
    int id PK
    int product_id FK
    int tag_id FK
  }

  categories ||--o{ subcategories : has
  subcategories ||--o{ products : has
  products ||--o{ product_images : has
  products ||--o{ product_variants : has
  product_variants ||--o{ variant_options : has
  products ||--o{ product_related : related
  products ||--o{ product_tags : tagged
  tags ||--o{ product_tags : includes
```


---

new mermaid product only, collection.
```mermaid
erDiagram
    PRODUCT {
        int id PK
        string code
        string name
        string description
    }

    PRODUCT_OPTION {
        int id PK
        int product_id FK
        string name
    }

    PRODUCT_OPTION_VALUE {
        int id PK
        int option_id FK
        string value
    }

    VARIANT {
        int id PK
        int product_id FK
        string sku
        float price
        int stock
    }

    VARIANT_OPTION_VALUE {
        int id PK
        int variant_id FK
        int option_value_id FK
    }

    COLLECTION {
        int id PK
        string name
        string description
    }

    PRODUCT_COLLECTION {
        int id PK
        int product_id FK
        int collection_id FK
    }

    PRODUCT ||--o{ PRODUCT_OPTION : "has many"
    PRODUCT_OPTION ||--o{ PRODUCT_OPTION_VALUE : "has many"
    PRODUCT ||--o{ VARIANT : "has many"
    VARIANT ||--o{ VARIANT_OPTION_VALUE : "uses values"
    PRODUCT_OPTION_VALUE ||--o{ VARIANT_OPTION_VALUE : "used in"
    PRODUCT ||--o{ PRODUCT_COLLECTION : "belongs to many (via)"
    COLLECTION ||--o{ PRODUCT_COLLECTION : "has many (via)"
```
