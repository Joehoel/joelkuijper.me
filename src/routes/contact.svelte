<h1 class="text-5xl font-bold my-10 inline-block text-base-content">Contact</h1>
<form action="post" class="flex flex-col gap-4" data-netlify="true" name="contact">
    <div class="form-control">
        <label for="name" class="label">Name</label>
        <input class="input input-bordered" type="text" name="name" placeholder="Name" required />
    </div>
    <div class="form-control">
        <label for="email" class="label">Email</label>
        <input class="input input-bordered" type="email" name="email" placeholder="Email" required />
    </div>
    <div class="form-control">
        <label for="message" class="label">Message</label>
        <textarea name="message" placeholder="Message" cols="30" rows="5" required class="textarea textarea-bordered" />
    </div>
    <div class="flex justify-end">
        <button type="submit" class="btn btn-primary text-base-100">Submit</button>
    </div>
</form>
