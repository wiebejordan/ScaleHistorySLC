select b.post_id, b.title, b.img, b.content, b.author.id, u.username u.profile_picture from blog_post b
join shslc_users u on b.author_id = u.user_id
where p.post_id = $1;