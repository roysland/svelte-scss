/* const requireComponent = require.context(
    './components/framework',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
  
    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
}) */