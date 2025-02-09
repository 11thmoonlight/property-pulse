import Properties from "@/components/Properties";
import PropertySearchForm from "@/components/PropertySearchForm";

async function PropertiesPage() {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl max-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
}

export default PropertiesPage;
