import { db } from "@vercel/postgres";
import productsData from "./products_data.json";

export async function seedDatabase() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS category (
        category_id SERIAL PRIMARY KEY,
        category_name VARCHAR(255) NOT NULL,
        category_image_url TEXT,
        subcategory_ids INT[]
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS subcategory (
        subcategory_id SERIAL PRIMARY KEY,
        subcategory_name VARCHAR(255) NOT NULL,
        product_ids INT[]
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS product (
        product_id SERIAL PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        category_id INT,
        article VARCHAR(50),
        manufacturer VARCHAR(255),
        price NUMERIC(10, 2),
        quantity_available INT,
        image_url TEXT,
        custom_parameters TEXT,
        attributes JSONB,
        description TEXT
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS wishlist (
        wishlist_id SERIAL PRIMARY KEY,
        product_ids INT[]
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS cart (
        cart_id SERIAL PRIMARY KEY,
        product_ids INT[]
      );
    `;

    await client.sql`
      CREATE TABLE IF NOT EXISTS profile (
        profile_id SERIAL PRIMARY KEY,
        full_name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        address TEXT,
        wishlist_id INT REFERENCES wishlist(wishlist_id),
        cart_id INT REFERENCES cart(cart_id)
      );
    `;

    await client.sql`
      INSERT INTO category (category_name, category_image_url, subcategory_ids) 
      VALUES 
      ('New Arrivals', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL),
      ('Rings', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', ARRAY[1,2,3]),
      ('Earrings', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL),
      ('Necklaces', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL),
      ('Bracelets', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL),
      ('Anklets', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL),
      ('Sets', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbracelet%2Bgold&psig=AOvVaw17Ad9FuBKqa3LWksd_RoWk&ust=1729858946469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOietfOAp4kDFQAAAAAdAAAAABAE', NULL)
      ON CONFLICT DO NOTHING;
    `;

    await Promise.all(
      productsData.map(async (product) => {
        await client.sql`
          INSERT INTO product (product_name, category_id, article, manufacturer, price, quantity_available, image_url, custom_parameters, attributes, description) 
          VALUES (
            ${product.productName}, 
            ${product.categoryId},
            ${product.article}, 
            ${product.manufacturer}, 
            ${product.price}, 
            ${product.quantityAvailable}, 
            ${product.imageUrl}, 
            ${product.clasps}, 
            ${JSON.stringify(product.attributes)}, 
            ${product.description}
          )
          ON CONFLICT DO NOTHING;
        `;
      })
    );

    await client.sql`
      INSERT INTO subcategory (subcategory_name, product_ids) 
      VALUES 
      ('Diamond Rings', '{9,10,11}'),
      ('Gold Earrings', '{12, 13}'),
      ('Rings with stones', '{14,15}')
      ON CONFLICT DO NOTHING;
    `;

    await client.sql`
      INSERT INTO wishlist (product_ids) 
      VALUES 
      ('{1, 3, 5}'),
      ('{2, 4, 6}')
      ON CONFLICT DO NOTHING;
    `;

    await client.sql`
      INSERT INTO cart (product_ids) 
      VALUES 
      ('{1, 2}'),
      ('{3, 4}')
      ON CONFLICT DO NOTHING;
    `;

    await client.sql`
      INSERT INTO profile (full_name, email, address, wishlist_id, cart_id) 
      VALUES 
      ('John Doe', 'john.doe@example.com', '123 Main St, City, Country', 1, 1),
      ('Jane Smith', 'jane.smith@example.com', '456 Side St, City, Country', 2, 2)
      ON CONFLICT DO NOTHING;
    `;

    await client.sql`COMMIT`;
    console.log("Database seeded successfully!");
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error("Error seeding database: ", error);
    throw error;
  }
}
