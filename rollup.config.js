/**
 * Created by ss on 2018/1/7.
 */

export default [

    {

        input: 'src/Gio.js',
        output: [

            {

                format: 'iife',
                file: 'build/Gio.js',
                name: "GIO"

            }

        ]

    }, {

        input: 'src/Gio.module.js',
        output: [

            {

                format: 'umd',
                file: 'build/Gio.module.js',
                name: "GIO-umd"

            }

        ]

    }

];