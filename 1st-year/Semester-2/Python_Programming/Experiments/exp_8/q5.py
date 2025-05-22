def read_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        raise FileNotFoundError("File '{}' not found.".format(filename))
    except PermissionError:
        raise PermissionError("Permission denied to read file '{}'.".format(filename))
    except IOError:
        raise IOError("Error occurred while reading file '{}'.".format(filename))
    except Exception as e:
        raise e
try:
    filename = "example.txt"
    content = read_file(filename)
    print("Content of the file:", content)
except FileNotFoundError as e:
    print("Error:", e)
except PermissionError as e:
    print("Error:", e)
except IOError as e:
    print("Error:", e)
except Exception as e:
    print("Unexpected error occurred:", e)