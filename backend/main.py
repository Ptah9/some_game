from getpass import getpass
from mysql.connector import connect, Error

user_name = "ptah_9"




try:
    with connect(
        host="localhost",
        user="root",
        password="lol",
        database="labsdb", 
        # user=input("Имя пользователя: "),
        # password=getpass("Пароль: "),
    ) as connection:
        with connection.cursor() as cursor:
            cursor.execute(f'''
                INSERT INTO users_info
                VALUES ({user_name});
                
                INSERT INTO users_this_life (tg_user_name, HP, weapon, magic, ring, shield, score, kills)
                VALUES ({user_name}, 100, 0, 0, 0, 0, 0, 0);

                INSERT INTO users_this_level (tg_user_name, now_level, now_x, now_y)
                VALUES ({user_name}, {now_level}, {now_x}, {now_y});
            ''')
            connection.commit()

except Error as e:
    print(e)
