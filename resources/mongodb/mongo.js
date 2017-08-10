function provision() {

  // use auth
  db = db.getSiblingDB('auth');

  // create user collection
  db.createCollection('user');
  db.user.createIndex(
    {'email': 1},{unique: true}
  );

  // create token collection
  db.createCollection('token');
  db.token.createIndex(
    {'username': 1},{unique: true}
  );

  printjson("created collections: " +  db.getCollectionNames());
}

provision();
