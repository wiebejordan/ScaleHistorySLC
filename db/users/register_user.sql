insert into shslc_users (
    username,
    password,
    profile_img,
    email,
    isadmin
) values (
    ${username},
    ${password},
    ${profile_img},
    ${email},
    ${isadmin}
    
)
returning user_id, username, profile_img, email, isadmin;