import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("post.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, title TEXT, date TEXT, booked INT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static getPosts(){
      return new Promise((resolve, reject) => {
          db.transaction(tx => {
              tx.executeSql('SELECT * FROM posts', [], (_, result) => resolve(result.rows._array), (_, err) => reject(err))
          })
      })
  }

  static createPost({text, date, img, title}){
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO posts (text, date, booked, img, title) VALUES (?, ?, ?, ?, ?)`,
                [text, date, 0, img, title],
                (_, result) => resolve(result.insertId),
                (_, error) => reject(error)
            )
        })
    })
  }

  static checkFavoritePost(post){
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE posts SET booked = ? WHERE id = ?",
          [post.booked ? 0 : 1, post.id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static deletePost(id){
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM posts WHERE id = ?",
          [id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static updatePost(post){
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE posts SET img = ?, title = ?, text = ? WHERE id = ?",
          [post.img, post.title, post.text, post.id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
}
