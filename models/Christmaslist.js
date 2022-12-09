import { pool } from "../db/index.js";

export async function getChristmasList() {
  const data = await pool.query("SELECT * FROM xmas_list;");
  console.log("The shopping list is", data.rows);
  return data.rows;
}

export async function postListItem(listItem) {
  const { name, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO xmas_list (
      name,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [name, completed]
  );
  return data.rows[0];
}

export async function deleteItem(id) {
    const deletedItem = await pool.query ("DELETE FROM xmas_list WHERE id = $1 RETURNING *", [id]);
    return deletedItem.rows
}

export async function completedItem(id) {
    const deletedItem = await pool.query ("UPDATE xmas_list SET completed=true WHERE id = $1 RETURNING *", [id]);
    return deletedItem.rows
}
