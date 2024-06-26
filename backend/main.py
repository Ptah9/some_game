from getpass import getpass
from mysql.connector import connect, Error

user = "ptah_9"
now_level = "[[0,0,0,0,0,0,0,3,0,0],[3,1,1,1,0,0,1,1,1,0],[0,0,0,1,0,0,0,0,1,0],[0,1,0,1,1,1,1,1,1,0],[0,1,1,1,0,1,0,0,1,0],[0,1,0,1,0,0,0,0,1,0],[0,0,0,1,1,1,1,1,1,0],[0,1,0,1,0,1,0,0,1,2],[0,1,1,1,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0]]"
now_x = 9
now_y = 7


def init_user(connection, user_name):
    with connection.cursor() as cursor:
        cursor.execute(f'''
                        INSERT INTO users_info
                        VALUES ("{user_name}");
                        ''')
        
        cursor.execute(f'''
                        INSERT INTO users_this_life (tg_user_name, HP, weapon, magic, ring, shield, score, kills) 
                        VALUES ("{user_name}", 100, 0, 0, 0, 0, 0, 0);
                        ''')
        
        cursor.execute(f'''
                        INSERT INTO users_this_level (tg_user_name, now_level, now_x, now_y) 
                        VALUES ("{user_name}", "{now_level}", {now_x}, {now_y});
                        ''')
        
        connection.commit()
            
def update(connection, user_name, table, obj, value):
    with connection.cursor() as cursor:
        cursor.execute(f'''
                        UPDATE
                            {table}
                        SET
                            {obj} = "{value}"
                        WHERE
                            tg_user_name = "{user_name}"
                        ''')
        connection.commit()
        
def geting(connection, table, user_name):
    with connection.cursor() as cursor:
        cursor.execute(f'''
                        SELECT * FROM {table} WHERE tg_user_name = '{user_name}';
                        ''')
        result = cursor.fetchall()
        # connection.commit()
        return result[0]
        
# def connecting(host, user, password, database,):

def connecting_get(table, user_name):
    try:
        with connect(
            host="localhost",
            user="root",
            password="password",
            database="labsdb", 
            # user=input("Имя пользователя: "),
            # password=getpass("Пароль: "),
        ) as connection:
            # init_user(connection)
            # update(connection, "users_this_life", "HP", 100)
            return geting(connection, table, user_name)

    except Error as e:
        return e

def connecting_new(user_name):
    try:
        with connect(
            host="localhost",
            user="root",
            password="password",
            database="labsdb", 
            # user=input("Имя пользователя: "),
            # password=getpass("Пароль: "),
        ) as connection:
            # init_user(connection)
            # update(connection, "users_this_life", "HP", 100)
            init_user(connection)

    except Error as e:
        return e
    

def connecting_update(user_name, table, obj, value):
    try:
        with connect(
            host="localhost",
            user="root",
            password="password",
            database="labsdb", 
            # user=input("Имя пользователя: "),
            # password=getpass("Пароль: "),
        ) as connection:
            # init_user(connection)
            # update(connection, "users_this_life", "HP", 100)
            update(connection, user_name, table, obj, value)
            return

    except Error as e:
        return e