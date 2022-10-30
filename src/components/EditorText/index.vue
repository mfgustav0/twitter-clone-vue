<template>
    <div contenteditable @input="handleInput" @keydown="handleKeydown" ref="root" class="focus:outline-0 editor-text" :placeholder="placeholder" />
</template>

<script>
    import { ref, reactive, toRefs, onMounted, nextTick } from 'vue';
    import useCommand from './commands.js';

    export default {
        name: 'EditorText',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            modelValue: {
                type: String,
                default: ''
            }
        },
        emits: ['update:modelValue'],
        setup(props, { emit }) {
            const {
                getCommand,
                exec,
                queryCommandValue
            } = useCommand();
            const root = ref(null);

            onMounted(() => {
                root.value.innerHTML = props.modelValue
            });

            const methods = reactive({
                handleInput: e => {
                    const { firstChild } = e.target;
                    if (firstChild && firstChild.nodeType === 3) {
                        exec('formatBlock', '<div>');
                    } else if (root.value.innerHTML === '<br>') {
                        root.value.innerHTML = '';
                    }
                    emit('update:modelValue', root.value.innerHTML);
                },
                handleKeydown: e => {
                    const key = e.key.toLowerCase();
                    if (key === 'enter' && queryCommandValue('formatBlock') === 'blockquote') {
                        nextTick(() => exec('formatBlock', '<div>'));
                    } else if (e.ctrlKey) {
                        const command = getCommand(key);
                        if(command) {
                            e.preventDefault();
                            nextTick(() => exec(command));
                        }
                    }
                }
            });

            return {
                root,
                ...toRefs(methods)
            };
        }
    };
</script>

<style lang="scss">
    .editor-text {
        a {
            color: #1d9bf0 !important;
        }

        &:empty:before {
            content: attr(placeholder);
            opacity: 0.6;
        }
    }
</style>