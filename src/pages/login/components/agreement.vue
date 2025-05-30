<template>
  <view>
    <view class="p-4">
      <uv-parse :content="agreement"></uv-parse>
    </view>
  </view>
</template>

<script setup>
  const agreement = `
    <div style="padding: 20px; line-height: 1.6; color: #333;">
        <h3 style="color: #1a1a1a; margin-bottom: 16px;">MIT 开源协议</h3>
        <p style="margin-bottom: 16px;">
          本项目已签署 MIT 协议，保障用户的使用权益。
        </p>
        
        <h4 style="color: #1a1a1a; margin: 20px 0 12px 0;">使用条款</h4>
        <p style="margin-bottom: 16px;">
          使用本项目的用户需要遵守如下条款：
        </p>
        
        <p style="margin-bottom: 16px;">
          特此授权，免费得以任何目的的使用、复制、修改、合并、出版、发行、散布、再授权及贩售软件及软件的副本，及授予前述权利的许可，无论是否为商业目的。
        </p>
        
        <h4 style="color: #1a1a1a; margin: 20px 0 12px 0;">免责声明</h4>
        <p style="margin-bottom: 16px;">
          上述软件是按「原样」提供，作者不作任何明示或暗示的保证，包括但不限于对适销性和特定目的的适用性的保证。在任何情况下，无论是在合同诉讼、侵权行为或其它方面，作者都不对因使用本软件或其中所包含的内容所产生的任何直接、间接、偶然、特殊及后果性损害承担责任。
        </p>
      </div>
  `
</script>
