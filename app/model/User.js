const {
    client
} = require("../config/db.js")


module.exports = class RoomStatus {

    static getAllUsers() {
        return client.query('SELECT * FROM public.user');
    }

    static GetUserByID(id) {

        return client.query('SELECT * FROM public.user WHERE id=$1', [id]);

    }

    static GetUserByUserName(userId) {

        return client.query('SELECT * FROM public.user WHERE username=$1', [userId]);

    }
    static insertUser(user) {

        return client.query(`INSERT INTO public.user(username,password_hash,email,profile_url) VALUES($1,$2,$3,$4)`, [user.username, user.password_hash, user.email, user.profile_url]);
    }

    static updateUser(user) {

        return client.query(`UPDATE public.user SET username=$1, email=$2, profile_url=$3 WHERE id=$4`, [user.username, user.email, user.profile_url, user.id]);

    }

    static updatePassword(user) {

        return client.query(`UPDATE public.user SET password=$1 WHERE id=$2`, [user.password, user.id]);

    }

    static deleteUser(id) {

        return client.query(`DELETE FROM public.user WHERE id=$1`, [id])
    }
}