select b.title, b.img, b.author.id, u.username from blog_post b
join shslc_users u on b.author_id = u.user_id order by post_id desc;