## Assignment - 2

Question - 1:
Why schema in MongoDB:

A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints and indexes. A Compiled version of the Schema is known as a Model. The Model handles the operations CRUD with MongoDB Collection. It also do validation and develope business logic boilerplate of data. Interface help Model to define type of data.


Question - 2:
Field filtering in MongoDB:

In MongoDB we filter by multiple fields by separating the different fields we want to use as a filter by comas. There is an $and operator, but this called implicit filter. We can use the $and operator explicitly when we use it more complex queries mixing different conditions.
I can specify by using $match keyword to filter a fields to include or exclude in the returned documents

Question - 3: 
Instance methods in MongoDB models:

Mongoose Schemas Instance methods refer to the methods used by Mongoose documents. These methods can be both, built-in and custom. Methods known as "instance methods" act only on a particular instance of a Model rather than the Model as a whole. Static methods are those that take some action on the entire Model. Although instance methods are preferable if you want to deal with functionality specific to a single database entry, static methods are still useful in a variety of circumstances.

example: 
let randomModel = new PersonModel({
  firstName: 'Jhankar',
  lastName: 'Mahabub'
})

let lastName = randomModel.getFullName()
console.log(fullName)
Output: Mahabub

Question - 4:
Comparison operators:

In MongoDB we use $ne," "$gt," "$lt," "$gte," and "$lte" for comparison of field data. $gt is used for those data which one is gater than the specified value. $gte is used for same reason but in this time it also check equality. $lt is used for those data which one is less than the specified value.$lte also check equality.
example: 
db.collection.find({age: {$gt: 20}}) -- here we will find all data where age of person above 20
db.collection.find({age: {$gte: 20}}) -- it will do same thing but check also equal value
db.collection.find({salary: {$lt: 5000}}) -- here we will find all data where salary of person less than 5000
db.collection.find({age: {$lte: 20}}) -- it will do same thing but check also equal value


Question - 5:
$in” and “$nin” operators:

$in operator is used to fetch documents from the collection after checking whether the value of a specific column is matching the values, specified in an array or not.On the other hand, the $nin operator is used to fetch documents from the collection except that, it matches documents for which the specified field does not have any value in the specified array.

Using example: 
db.collection.find( { age: { $in: [ 5, 15 ] } }, { _id: 0 } ) -- here we will get data where age only 5 and 15
db.collection.find( { age: { $nin: [ 5, 15 ] } }, { _id: 0 } ) -- this will do opposite operation exactly.