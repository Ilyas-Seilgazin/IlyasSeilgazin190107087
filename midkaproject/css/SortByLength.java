import java.util.*;
import java.io.*;

public class SortByLength{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		ArrayList<String> list = new ArrayList<String>();

		while(input.hasNext()) {
			list.add(input.next());
		}
		System.out.println(list);
	}
}