import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';  // 导入插件

export default defineConfig({
  input: 'src/index.js', // 你的入口文件
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS 格式
      exports: 'auto', // 自动导出
    },
    {
      file: 'dist/index.esm.js',
      format: 'es', // ESM 格式
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),  // 在打包前清理 dist 目录
    resolve(), // 解析 node_modules 模块
    commonjs(), // 支持 CommonJS 转换为 ESM
    babel({ babelHelpers: 'bundled' }), // 支持 Babel 转换
    terser(), // 压缩代码
  ],
});