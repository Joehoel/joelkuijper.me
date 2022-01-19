<h1 class="text-5xl font-bold my-10 inline-block">Contact</h1>
<form action="post" class="flex flex-col gap-4" data-netlify="true" name="contact">
    <div class="flex flex-col">
        <label for="name" class="font-semibold text-md mb-1">Name</label>
        <input
            type="text"
            name="name"
            placeholder="Name"
            required
            class="outline-none ring-2 focus:ring-brand active:ring-brand focus-visible:ring-brand ring-white outline-2 dark:bg-gray-900 px-3 py-2"
        />
    </div>
    <div class="flex flex-col">
        <label for="email" class="font-semibold text-md mb-1">Email</label>
        <input
            type="email"
            name="email"
            placeholder="Email"
            required
            class="outline-none ring-2 focus:ring-brand active:ring-brand focus-visible:ring-brand ring-white outline-2 dark:bg-gray-900 px-3 py-2"
        />
    </div>
    <div class="flex flex-col">
        <label for="message" class="font-semibold text-md mb-1">Message</label>
        <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
            required
            class="outline-none ring-2 focus:ring-brand active:ring-brand focus-visible:ring-brand ring-white outline-2 dark:bg-gray-900 px-3 py-2"
        />
    </div>
    <div class="flex justify-end">
        <button
            type="submit"
            class="outline-none ring-2 focus:ring-brand active:ring-brand focus-visible:ring-brand ring-white outline-2 dark:bg-gray-900 px-3 py-2"
            >Submit</button
        >
    </div>
</form>
