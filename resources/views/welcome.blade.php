<x-layout>
    <div class="space-y-10">
        <section>
            <x-section-heading>Feature Jobs</x-section-heading>
            <div class="gird lg:grid-cols-3 gap-6 mt-6">
                <x-job-card />
                <x-job-card />
                <x-job-card />
            </div>
        </section>

        <section class="mt-10">
            <x-section-heading>Tags</x-section-heading>
        </section>
        <section class="mt-10">
            <div class="mt-6 space-x-1">
                <x-tag>Tags</x-tag>
                <x-tag>Tags</x-tag>
                <x-tag>Tags</x-tag>
                <x-tag>Tags</x-tag>
                <x-tag>Tags</x-tag>
                <x-tag>Tags</x-tag>
            </div>
            <x-section-heading>Recent Jobs</x-section-heading>
        </section>
    </div>
</x-layout>
