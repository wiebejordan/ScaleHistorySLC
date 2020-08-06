select username, profile_img, side, email, user_id, isadmin from shslc_users
where user_id = $1;