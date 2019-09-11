<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  @color: #409eff;
  @colorHover: #66b1ff;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html, body {
    margin: 0;
    background: #f6f6f6
  }

  h1, h2 {
    font-weight: normal;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: @color;
  }

  .header {
    background: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    .container {
      display: flex;
      justify-content: space-between;
    }
    .logo {
      line-height: 60px;
      color: @color;
      font-weight: bold;
      font-size: 38px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      img {
        max-height: 60px;
        display: block
      }
    }
    .menu {
      ul {
        margin: 0;
        li {
          display: inline-block;
          padding: 0 20px;
          line-height: 60px;
          margin: 0 5px;
          cursor: pointer;
          font-size: 15px;
          color: #666;
          &.active {
            color: @color;
          }
        }
      }
    }
  }

  .header + div {
    margin-top: 60px
  }

  .more-link {
    display: none
  }

  .container {
    max-width: 1200px;
    margin: 0 auto
  }

  .article-list {
    margin: 0 auto;
    > ul li {
      background: #fff;
      padding: 20px;
      margin-bottom: 15px;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
      cursor: pointer;
      h1 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px
      }
      p {
        font-size: 14px
      }
      span {
        font-size: 13px;
        color: @color
      }
      img {
        max-width: 100%
      }
      .article-rendered {
        max-height: 200px;
        overflow: hidden;
        margin-bottom: 20px;
        position: relative;
        background: #f0f0f0;
        padding: 20px;
        transition: all .2s;
        &:before {
          transition: all .2s;
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 50px;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .2));
          position: absolute
        }
      }
      &:hover {
        .article-rendered {
          background: #f6f6f6;
          &:before {
            height: 40px;
          }
        }
      }
    }
  }

  .btn-next, .el-pager li, .btn-prev {
    background: none !important;
  }

  .el-pager li.active {
    color: @color
  }

  .el-pagination {
    margin-bottom: 20px
  }

  .return {
    font-size: 13px;
    padding: 20px 0 10px;
    display: inline-block;
    color: @color;
    cursor: pointer;
    transition: all .2s;
    &:hover {
      color: @colorHover;
      text-decoration: underline;
    }
  }

  .article {
    font-size: 14px;
    line-height: 28px;
    background: #fff;
    padding: 0 20px 20px;
  }

  .article, .article-rendered {
    .article-h1 {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    h1 {
      font-size: 17px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    h2 {
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    h3 {
      font-size: 15px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .p {
      font-size: 14px;
      border-bottom: 1px solid #d6d6d6;
      padding-bottom: 15px;
      padding-top: 15px;
      margin-bottom: 40px;
      span {
        padding-right: 40px
      }
    }
    p {
      font-size: 14px;
      line-height: 28px
    }
    pre {
      padding: 15px 20px;
      line-height: 28px;
      background: #f5f5f5;
      code {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 14px
      }
    }
    ul {
      li {
        padding: 5px 0
      }
    }
    img {
      max-width: 100%;
      display: block
    }
  }
</style>

