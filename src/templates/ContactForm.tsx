import { Formik, Field, Form } from 'formik';
import React from 'React';

import { AppConfig } from '../utils/AppConfig';

const FormikForm = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 max-w-5xl m-auto mt-24 mb-24">
      <div className="mt-5 md:mt-0 md:col-span-3">
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            // post request to server
            setSubmitting(false);

            fetch(`${AppConfig.apiUrl}api/contacts`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: values }),
            }).then(() => {
              console.log('success');
            });
          }}
        >
          <Form>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="company-website"
                      className="block text-xl font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md  sm:text-xl border-gray-300"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="company-website"
                      className="block text-xl font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-xl border-gray-300"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="company-website"
                      className="block text-xl font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-xl border-gray-300"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl border border-gray-300 rounded-md"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <p className="mt-2 text-xl text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
