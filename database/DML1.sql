-- SHOW Circlers by Circle ID
SELECT username from Users INNER JOIN Circlers ON Circlers.user_id = Users.user_Id WHERE Circlers.circle_Id = 2;

-- SHOW Friends by User ID
SELECT username from Users INNER JOIN Friendships ON Friendships.user_id1 = Friendships.user_id2 WHERE Friendships.user_id1 = 2;