import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Sidebar from './Sidebar'; // We'll create a Sidebar component
import Footer from './Footer';   // We'll create a Footer component

const Documentation = () => {
  return (
    <div className="flex min-h-screen bg-white antialiased dark:bg-zinc-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-auto">
          <article className="flex h-full flex-col pb-10 pt-16">
            <div className="prose dark:prose-invert mx-auto max-w-2xl lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] lg:max-w-3xl">
              {/* Main Content Here */}
              <h1>Pagination</h1>
              <p className="lead">
                In this guide, we will look at how to work with paginated responses when querying
                the Protocol API. By default, all responses limit results to ten. However, you can
                go as high as 100 by adding a <code>limit</code> parameter to your requests. If you
                are using one of the official Protocol API client libraries, you don't need to
                worry about pagination, as it's all being taken care of behind the scenes.
              </p>
              <p>
                When an API response returns a list of objects, no matter the amount, pagination is
                supported. In paginated responses, objects are nested in a <code>data</code>{' '}
                attribute and have a <code>has_more</code> attribute that indicates whether you
                have reached the end of the last page. You can use the <code>starting_after</code>{' '}
                and <code>ending_before</code> query parameters to browse pages.
              </p>

              <h2 id="example-using-cursors">Example using cursors</h2>

              <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
                {/* Left Column */}
                <div>
                  <p>
                    In this example, we request the page that starts after the conversation with id{' '}
                    <code>s4WycXedwhQrEFuM</code>. As a result, we get a list of three conversations
                    and can tell by the <code>has_more</code> attribute that we have reached the end
                    of the result set.
                  </p>

                  {/* Parameter List */}
                  <ul className="list-none divide-y divide-zinc-900/5 dark:divide-white/5">
                    <li className="py-4">
                      <dl className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <dt className="sr-only">Name</dt>
                        <dd>
                          <code>starting_after</code>
                        </dd>
                        <dt className="sr-only">Type</dt>
                        <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                          string
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="w-full">
                          <p>
                            The last ID on the page you're currently on when you want to fetch the
                            next page.
                          </p>
                        </dd>
                      </dl>
                    </li>
                    {/* Add more parameters as needed */}
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  {/* Code Snippet */}
                  <div className="my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
                    <div className="flex items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800">
                      <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                        Manual pagination using cURL
                      </h3>
                    </div>
                    <div className="group dark:bg-white/2.5">
                      <div className="relative">
                        <pre className="overflow-x-auto p-4 text-xs text-white">
                          <code className="language-bash">
                            {`curl -G https://api.protocol.chat/v1/conversations \\
  -H "Authorization: Bearer {token}" \\
  -d starting_after="s4WycXedwhQrEFuM" \\
  -d limit=10
`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Response Snippet */}
                  <div className="my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
                    <div className="flex items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800">
                      <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                        Paginated response
                      </h3>
                    </div>
                    <div className="group dark:bg-white/2.5">
                      <div className="relative">
                        <pre className="overflow-x-auto p-4 text-xs text-white">
                          <code className="language-json">
                            {`{
  "has_more": false,
  "data": [
    {
      "id": "WAz8eIbvDR60rouK",
      // ...
    },
    {
      "id": "hSIhXBhNe8X1d8Et"
      // ...
    },
    {
      "id": "fbwYwpi9C2ybt6Yb"
      // ...
    }
  ]
}
`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
              <div className="relative h-8">
                <form className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Was this page helpful?
                  </p>
                  <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                    <button
                      type="submit"
                      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                      data-response="yes"
                    >
                      Yes
                    </button>
                    <div className="bg-zinc-900/10 dark:bg-white/10"></div>
                    <button
                      type="submit"
                      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                      data-response="no"
                    >
                      No
                    </button>
                  </div>
                </form>
              </div>
            </footer>
          </article>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Documentation;
