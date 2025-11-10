<script lang="ts">
    import * as Select from "$lib/components/ui/select/index.js";

    export let value: string = "";

    const role = [
        { value: "Queued", label: "Queued" },
        { value: "Working", label: "Working" },
        { value: "Finished", label: "Finished" }
    ];

    $: triggerContent =
        role.find((f) => f.value === value)?.label ?? "Select";
</script>

<Select.Root type="single" name="role" bind:value>
    <Select.Trigger class="w-24 border-ring">
        {triggerContent}
    </Select.Trigger>

    <Select.Content>
        <Select.Group>
            <Select.Label>Work Status</Select.Label>
            {#each role as pre (pre.value)}
                <Select.Item value={pre.value} label={pre.label}>
                    {pre.label}
                </Select.Item>
            {/each}
        </Select.Group>
    </Select.Content>
</Select.Root>