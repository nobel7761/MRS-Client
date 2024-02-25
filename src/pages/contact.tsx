import ContactPageComponent from "@/components/Contact/Contact.component";
import { layoutUser } from "@/components/layouts/UserLayout";

const ContactPage = () => {
  return (
    <div>
      <ContactPageComponent />
      <h1>contact</h1>
    </div>
  );
};

ContactPage.getLayout = layoutUser;

export default ContactPage;
