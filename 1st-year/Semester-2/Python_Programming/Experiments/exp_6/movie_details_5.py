def print_movie_details(movie_dict):
    print("Movie Details:")
    for movie_name, details in movie_dict.items():
        print(f"Movie Name: {movie_name}")
        print(f"Year: {details['year']}")
        print(f"Director: {details['director']}")
        print(f"Production Cost: {details['production_cost']}")
        print(f"Collection Made: {details['collection_made']}")
        print()

def movies_before_2015(movie_dict):
    print("Movies released before 2015:")
    for movie_name, details in movie_dict.items():
        if details['year'] < 2015:
            print(movie_name)
    print()

def profitable_movies(movie_dict):
    print("Profitable Movies:")
    for movie_name, details in movie_dict.items():
        if details['collection_made'] > details['production_cost']:
            print(movie_name)
    print()

def movies_by_director(movie_dict, director_name):
    print(f"Movies directed by {director_name}:")
    for movie_name, details in movie_dict.items():
        if details['director'] == director_name:
            print(movie_name)
    print()

def main():
    n = int(input("Enter the number of movies: "))
    movie_details = {}

    for i in range(n):
        movie_name = input(f"Enter the name of movie {i+1}: ")
        year = int(input(f"Enter the year of release for {movie_name}: "))
        director = input(f"Enter the director of {movie_name}: ")
        production_cost = float(input(f"Enter the production cost of {movie_name}: "))
        collection_made = float(input(f"Enter the collection made for {movie_name}: "))

        movie_details[movie_name] = {
            'year': year,
            'director': director,
            'production_cost': production_cost,
            'collection_made': collection_made
        }

    print_movie_details(movie_details)
    movies_before_2015(movie_details)
    profitable_movies(movie_details)

    director_name = input("Enter the director's name to get movies directed by them: ")
    movies_by_director(movie_details, director_name)

if __name__ == "__main__":
    main()
