"use client";

export const PageFooter: React.FC<any> = (props: any) => {
  return (
    <footer className="bg-secondary min-h-80 w-full p-3 grid-flow-col grid">
      <div>
        <h3 className="text-white">Contact Information</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div>
        <h3 className="text-white">Follow Us</h3>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
      <div>
        <h3 className="text-white">Useful Links</h3>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <h3 className="text-white">Address</h3>
        <p>123 Main Street</p>
        <p>Cityville, State 12345</p>
      </div>
      <div>
        <h3 className="text-white">Newsletter</h3>
        <p>Subscribe to our newsletter for updates.</p>
        {/* Add a subscription form here */}
      </div>
    </footer>
  );
};
