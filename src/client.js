import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wgsrprlq",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skM81Gmpz1A40jUkx8xKQy2PK8agRKTO5Pd5dXWdxIohgat5ZMUdanD3nKjEUfn4JdECD4UhSxPX86V9KMRdeYNR06uaAidGfrXomfv5KfHnNHE8llpWfHL0jhWtuWVi6zZBbtfRaj5w4oVtvpXMUpwpjljJVQaFCF1K2jKa8hNX3Yaty6Py",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
