const FormikForm = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 max-w-5xl m-auto mt-24 mb-24">
      <div className="mt-5 md:mt-0 md:col-span-3">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-1 ">Name</div>
              <div className="col-span-3 sm:col-span-2 ml-auto font-extrabold">
                YB TECH
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-1 ">Email</div>
              <div className="col-span-3 sm:col-span-2 ml-auto font-extrabold">
                hasanjaved065@gmail.com
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-1 ">Whatsapp</div>
              <div className="col-span-3 sm:col-span-2 ml-auto font-extrabold">
                +92-3474134760
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-1 ">LinkedIn</div>
              <div className="col-span-3 sm:col-span-2 ml-auto font-extrabold">
                <a href="https://www.linkedin.com/company/yb-tech">
                  YB TECH LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
