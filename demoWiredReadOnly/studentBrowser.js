import { LightningElement, wire } from "lwc";
import getStudents from "@salesforce/apex/StudentBrowser.getStudents";

export default class StudentBrowser extends LightningElement {
	students;

	@wire(getStudents, { instructorId: "", courseDeliveryId: "" })
	wiredStudents(result) {
		if (result && result.data) {
			this.students = result;
			// si je fais cela, je tente de modifier mon objet retourné par la méthode wired, ce n'est pas permis et çà déclenche des erreurs coté console
			//			result.data[0].Name = "test";

			// ici je crée un clone de mon objet qui va donc perdre les fonction de l'objet wired (le proxy n'est pas récupéré)
			this.students = JSON.parse(JSON.stringify(result));
			// Si je souhaite mettre en Majuscule tous les noms
			this.students.data.forEach((element) => {
				element.Name = element.Name.toUpperCase();
			});
			// je peux donc modifier les valeurs récupérés comme bon me semble
			this.students.data[0].Name = "test";
		}
	}
}
