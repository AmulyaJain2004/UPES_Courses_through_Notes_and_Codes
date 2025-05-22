def main():
    r = int(input("Enter the radius of cone: "))
    h = int(input("Enter the height of cone: "))
    cone_vol = volume_of_cone(r,h)
    print(f"The volume of cone is {cone_vol}")
    return 0

volume_of_cone = lambda radius, height: (0.33333)*(3.14159)*(radius**2)*height
    

if __name__ == "__main__":
    main() 