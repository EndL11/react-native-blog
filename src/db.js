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

  static createPost({text, date, booked, img, title}){
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO posts (text, date, booked, img, title) VALUES (?, ?, ?, ?, ?)`,
                [text, date, booked, img, title],
                (_, result) => resolve(result.insertId),
                (_, error) => reject(error)
            )
        })
    })
  }
}
