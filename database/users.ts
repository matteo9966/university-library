const get_user_count_by_email_query = `SELECT COUNT(*)
                    FROM users 
                    WHERE users.email=$1
                    LIMIT 1;`;

const get_user_by_email_query = `SELECT *
                    FROM users
                    WHERE users.email=$1
                    LIMIT 1;`;

export { get_user_count_by_email_query, get_user_by_email_query };
