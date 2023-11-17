-- SHOW Circlers by Circle ID
SELECT username from Users INNER JOIN Circlers ON Circlers.user_id = Users.user_Id WHERE Circlers.circle_Id = 2;

-- SHOW Friends by User ID
SELECT username from Users INNER JOIN Friendships ON Friendships.user_id1 = Friendships.user_id2 WHERE Friendships.user_id1 = 2;

--FROM PROFILE VIEW

--show all of my circles
SELECT name from Circles WHERE circle_id = (SELECT circle_id from Circlers INNER JOIN Users ON Circlers.user_id = Users.user_id WHERE Users.user_id = ${my_id});

--show circle by name