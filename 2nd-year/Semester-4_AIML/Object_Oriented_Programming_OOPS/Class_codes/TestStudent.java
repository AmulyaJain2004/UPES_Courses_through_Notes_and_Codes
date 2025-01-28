class Demo {
	int roll;
	String name;
	double marks;

	public void setData(int r, String s, double m){
		roll = r;
		name = s;
		marks = m;
	}

	public void getData(){
		System.out.println("roll :" + roll);
		System.out.println("name :" + name);
		System.out.println("marks :" + marks);
	}
}

class TestStudent {
	public static void main(String args[]){
		Demo d1 = new Demo();
		d1.setData(2,"Amulya",99);
		d1.getData();
	}
}