default_platform(:ios)

platform :ios do
  desc "Push a new dev build to TestFlight"
  lane :dev_build do |options|

    current_build = get_info_plist_value(path: "./GokadaDriver/Info.plist", key: "CFBundleVersion")

    new_build = options[:build] || current_build.to_i + 1

    # Increment the build number (not the version number)
    set_info_plist_value(path: "./GokadaDriver/Info.plist", key: "CFBundleVersion", value: new_build.to_s)

    if options[:version]
      set_info_plist_value(path: "./GokadaDriver/Info.plist", key: "CFBundleShortVersionString", value: options[:version])
    end

    build_app(workspace: "GokadaDriver.xcworkspace", scheme: "GokadaDriver")

    upload_to_testflight(
      skip_waiting_for_build_processing: true,
      app_identifier: "ng.gokada.gokada"
    )

    version = options[:version] || get_version_number(
      xcodeproj: "GokadaDriver.xcodeproj",
      target: "GokadaDriver"
    )

    git_commit(path: "./GokadaDriver/Info.plist", message: "IOS Dev Build #{version}(#{new_build})")

    push_to_git_remote
  end

  desc "Push a new staging build to TestFlight"
  lane :staging_build do |options|

    current_build = get_info_plist_value(path: "./GokadaDriver/Info-Staging.plist", key: "CFBundleVersion")

    new_build = options[:build] || current_build.to_i + 1

    # Increment the build number (not the version number)
    set_info_plist_value(path: "./GokadaDriver/Info-Staging.plist", key: "CFBundleVersion", value: new_build.to_s)

    if options[:version]
      set_info_plist_value(path: "./GokadaDriver/Info-Staging.plist", key: "CFBundleShortVersionString", value: options[:version])
    end

    build_app(workspace: "GokadaDriver.xcworkspace", scheme: "GokadaDriver-Staging")

    upload_to_testflight(
      skip_waiting_for_build_processing: true,
      app_identifier: "ng.gokada.gokada.staging"
    )

    version = options[:version] || get_version_number(
      xcodeproj: "GokadaDriver.xcodeproj",
      target: "GokadaDriver-Staging"
    )

    git_commit(path: "./GokadaDriver/Info-Staging.plist", message: "IOS Staging Build #{version}(#{new_build})")

   push_to_git_remote
  end

  desc "Push a new production build to TestFlight"
  lane :production_build do |options|

    current_build = get_info_plist_value(path: "./GokadaDriver/Info-Release.plist", key: "CFBundleVersion")

    new_build = options[:build] || current_build.to_i + 1

    # Increment the build number (not the version number)
    set_info_plist_value(path: "./GokadaDriver/Info-Release.plist", key: "CFBundleVersion", value: new_build.to_s)

    if options[:version]
      set_info_plist_value(path: "./GokadaDriver/Info-Release.plist", key: "CFBundleShortVersionString", value: options[:version])
    end

    scheme = options[:api_version] === 'v2' ? "GokadaDriver-Release-V2" : "GokadaDriver-Release"

    build_app(workspace: "GokadaDriver.xcworkspace", scheme: scheme)

    # Read changelog

    upload_to_testflight(
      skip_waiting_for_build_processing: true,
      app_identifier: "ng.gokada.user"
    )

    version = options[:version] || get_version_number(
      xcodeproj: "GokadaDriver.xcodeproj",
      target: "GokadaDriver-Release"
    )

    git_commit(path: "./GokadaDriver/Info-Release.plist", message: "IOS Production Build #{version}(#{new_build}) API #{options[:api_version] || 'v1'}")

    push_to_git_remote
  end

  desc "Push a new staging build to TestFlight"
  lane :staging do |options|
    ensure_git_status_clean
    staging_build(options)
  end

  desc "Push a new production build to TestFlight"
  lane :production do |options|
    ensure_git_status_clean
    production_build(options)
  end

  desc "Push a new dev build to TestFlight"
  lane :dev do |options|
    ensure_git_status_clean
    dev_build(options)
  end
end
