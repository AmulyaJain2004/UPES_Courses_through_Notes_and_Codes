class Demo{
	public static void main(String args[]){
		int a = 10;
		int aaaaaaaaaa = 10;
		int aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 32;
		int aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 128;
		int aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 512;
	}
}

/*
Why we can use identifier of any length in JAVA ? How JVM handles storing of identifiers or especially long identifiers in memory ?
 * This shows that the variable name can be of any length.
 * Reserved words are 53 only.
 * During compilation, the Java compiler does not store these identifiers as-is in memory for execution. Instead, the compiler uses symbol tables to map these human-readable identifiers to internal representations, such as numeric indices or references.
 * In Java, identifiers can be of any length because the JVM doesn't use them directly at runtime. During compilation, identifiers are stored in the class file's constant pool as UTF-8 strings for reference, but the JVM uses efficient memory structures like indexes and offsets, minimizing performance and memory impact.
 * 
 */