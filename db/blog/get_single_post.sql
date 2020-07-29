select b.post_id, b.title, b.img, b.content, b.author_id, u.username, u.profile_img from blog_post b
join shslc_users u on b.author_id = u.user_id
where b.post_id = $1;