string = "UPES University, located in Dehradun, is renowned for its commitment to excellence in education. The institution stands out due to its innovative curriculum, fostering a dynamic learning environment. UPES emphasizes practical knowledge and industry-oriented programs, preparing students for real-world challenges. The UPES state-of-the-art facilities and experienced faculty contribute to a holistic educational experience. UPES continually strives to nurture a spirit of inquiry and critical thinking among its students, shaping them into well-rounded individuals poised for success in their chosen fields. The campus itself is known for its vibrant atmosphere and the diverse range of academic disciplines offered, creating a platform for students to explore and excel in their academic pursuits."
count_upes = string.count("UPES")
count_upes_checker = 0

index = -1
for i in range(count_upes):
    index = string.find("UPES", index + 1)
    if index == -1:
        break
    count_upes_checker += 1
    if count_upes_checker == count_upes:
        string = string[:index] + "It" + string[index + len("UPES"):]

print(string)